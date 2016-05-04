import UIKit
import Foundation

class ProductSearchViewController : UIViewController, UITableViewDataSource, UITableViewDelegate  {
    
    var productList : Array<ProductVO> = [];
    
    var page = 1
    var count = 10
    var searchKeyword = ""
    
    @IBOutlet var productTable: UITableView!
    @IBOutlet var moreBtn: UIButton!
    
    @IBOutlet var keyword: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.moreBtn.hidden = true
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.productList.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let row = self.productList[indexPath.row]
        
        let cell = tableView.dequeueReusableCellWithIdentifier("ProductListCell") as! ProductListCell
        
        let productPrice = row.productPrice
        let salePrice = row.salePrice
        
        cell.productName?.text = row.productName
        cell.productPrice?.text = "\(self.getDecimalStyle(productPrice!)) 원"
        cell.salePrice?.text = "\(self.getDecimalStyle(salePrice!)) 원"
        
        dispatch_async(dispatch_get_main_queue(), {
            cell.productImage.image = self.getProductImage(indexPath.row)
        })
        
        return cell
    }
    
    func getDecimalStyle(org : String) -> String {
        let formatter = NSNumberFormatter()
        formatter.numberStyle = .DecimalStyle
        formatter.locale = NSLocale(localeIdentifier: "ko_kr")
        return formatter.stringFromNumber(Int(org)!)!
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        // todo
    }
    
    @IBAction func search(sender: AnyObject) {
        self.searchResultReset()
        self.callProductAPI()
        self.productTable.reloadData()
    }
    
    func searchResultReset() {
        self.page = 1
        self.productList.removeAll()
    }
    
    @IBAction func more(sender: AnyObject) {
        self.page += 1
        self.callProductAPI()
        self.productTable.reloadData()
    }

    
    func callProductAPI() {
        var apiURIParams : Dictionary<String,String> = [String:String]( )
        apiURIParams["version"] = "1"
        apiURIParams["page"] = "\(self.page)"
        apiURIParams["count"] = "\(self.count)"
        apiURIParams["searchKeyword"] = self.keyword.text!
        apiURIParams["appKey"] = "9d4a762c-cf81-370a-b1de-e3244271426b"
        
        var apiURIString = "http://apis.skplanetx.com/11st/common/products"
        apiURIString = apiURIString + String.queryStringFromParameters(apiURIParams)!
        
        let apiURI = NSURL(string: apiURIString as String)
        guard (apiURI != nil) else {
            NSLog("apiURI is nil")
            return
        }
        
        var apiData : NSData?
        if let apiDataTemp = NSData(contentsOfURL: apiURI!) {
            apiData = apiDataTemp
        } else {
            NSLog("apiData is nil")
            return
        }
        
        do {
            let apiDictionary = try NSJSONSerialization.JSONObjectWithData (apiData! , options:[]) as! NSDictionary
            
            let productSearchResponse = apiDictionary["ProductSearchResponse"] as! NSDictionary
            let products = productSearchResponse["Products"] as! NSDictionary
            let totalCount = products["TotalCount"] as! Int
            let product = products["Product"] as! NSArray
            
            NSLog("totalCount = %d", totalCount)
            
            if(totalCount < count) {
                self.moreBtn.hidden = true
            } else if (self.productList.count >= totalCount) {
                self.moreBtn.hidden = true
            } else if(totalCount > self.productList.count && totalCount > 0) {
                self.moreBtn.hidden = false
            }
            
            for row in product {
                let productVOTemp = ProductVO()                
                productVOTemp.productCode = "\(row["ProductCode"] as! Int)"
                productVOTemp.productName = row["ProductName"] as? String
                productVOTemp.productPrice = "\(row["ProductPrice"] as! Int)"
                productVOTemp.salePrice = "\(row["SalePrice"] as! Int)"
                productVOTemp.productImageUrl = row["ProductImage"] as? String
                productVOTemp.detailPageUrl = row["DetailPageUrl"] as? String
                
                self.productList.append(productVOTemp)
            }

        } catch {
            NSLog("Parse Error!")
        }
        
    }
    
    func getProductImage(index : Int) -> UIImage {
        let productVO = self.productList[index]
        
        if let _ = productVO.productImage {
            return productVO.productImage!
        } else {
            let url = NSURL(string: productVO.productImageUrl!)
            let imageData : NSData? = NSData(contentsOfURL: url!)
            productVO.productImage = UIImage(data: imageData!)
            
            return productVO.productImage!
        }
    }
    
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if (segue.identifier == "segue_productDetail") {
            let path = self.productTable.indexPathForCell(sender as! ProductListCell)
            (segue.destinationViewController as? ProductDetailViewController)?.productVO = self.productList[path!.row]
        }
    }
    
}

extension String {
    func URLEncodedString() -> String? {
        let customAllowedSet =  NSCharacterSet.URLQueryAllowedCharacterSet()
        let escapedString = self.stringByAddingPercentEncodingWithAllowedCharacters(customAllowedSet)
        return escapedString
    }
    static func queryStringFromParameters(parameters: Dictionary<String,String>) -> String? {
        if (parameters.count == 0) {
            return nil
        }
        var queryString : String? = nil
        for (key, value) in parameters {
            if let encodedKey = key.URLEncodedString() {
            if let encodedValue = value.URLEncodedString() {
                if queryString == nil
            {
                    queryString = "?"
            }
                else
            {
                    queryString! += "&"
                }
                queryString! += encodedKey + "=" + encodedValue
            }
            }
        }
        return queryString
    }
}