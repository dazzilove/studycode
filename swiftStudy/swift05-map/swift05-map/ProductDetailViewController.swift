import UIKit

class ProductDetailViewController : UIViewController, UIWebViewDelegate {
    
    @IBOutlet var navibar: UINavigationItem!
    @IBOutlet var wv: UIWebView!
    @IBOutlet var spinner: UIActivityIndicatorView!
    
    var productVO : ProductVO? = nil
    
    override func viewDidLoad() {
        self.navibar.title = self.productVO?.productName
        self.wv.delegate = self
        
        if let url = self.productVO?.detailPageUrl {
            if let urlObj = NSURL(string: url) {
                let req = NSURLRequest(URL: urlObj)
                self.wv.loadRequest(req)
            } else {    // URL 형식이 잘못되었을 경우에 대한 예외처리
                let alert = UIAlertController(title: "오류", message: "잘못된 URL입니다.", preferredStyle: .Alert)
                let cancelAction = UIAlertAction(title: "확인", style: .Cancel) {
                    (_) in
                    self.navigationController?.popViewControllerAnimated(true)
                }
                
                alert.addAction(cancelAction)
                self.presentViewController(alert, animated: false, completion: nil)
            }
        } else {    // URL 값이 전달되지 않았을 경우에 대한 예외처리
            let alert = UIAlertController(title: "오류", message: "필수 파라미터가 누락되었습니다.", preferredStyle: .Alert)
            let cancelAction = UIAlertAction(title: "확인", style: .Cancel) {
                (_) in
                self.navigationController?.popViewControllerAnimated(true)
            }
            
            alert.addAction(cancelAction)
            self.presentViewController(alert, animated: false, completion: nil)
        }
        
        //let req = NSURLRequest(URL: NSURL(string: (self.productVO?.detailPageUrl)!)!)
        //self.wv.loadRequest(req)
    }
    
    func webViewDidStartLoad(webView: UIWebView) {
        self.spinner.startAnimating()
    }
    
    func webViewDidFinishLoad(webView: UIWebView) {
        self.spinner.stopAnimating()
    }
    
    func webView(webView: UIWebView, didFailLoadWithError error: NSError?) {
        self.spinner.stopAnimating()
        
        let alert = UIAlertController(title: "오류", message: "상세페이지를 읽어오지 못했습니다.", preferredStyle: .Alert)
        let cancelAction = UIAlertAction(title: "확인", style: .Cancel) {
            (_) in
            self.navigationController?.popViewControllerAnimated(true)
        }
        
        alert.addAction(cancelAction)
        self.presentViewController(alert, animated: false, completion: nil)    }
}