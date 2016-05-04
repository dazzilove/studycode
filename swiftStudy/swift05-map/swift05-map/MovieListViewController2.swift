import UIKit

class MovieListViewController2 : UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    var movieList : Array<MovieVO> = [];
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let testData = TestData()
        testData.setTestData()
        
        movieList.appendContentsOf(testData.movieList)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        NSLog("self.movieList.count = %d", self.movieList.count)

        return self.movieList.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let row = self.movieList[indexPath.row]

        let cell = tableView.dequeueReusableCellWithIdentifier("MovieListCell2") as! MovieListCell2
        
        cell.title?.text = row.title
        cell.desc?.text = row.desc
        cell.screenStartDay?.text = row.screenStartDay! + " open"
        cell.poster.image = UIImage(named: row.posterImageName!)

        return cell
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        // todo
    }
    
    
    
}