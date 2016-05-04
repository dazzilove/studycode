//
//  MovieListViewController.swift
//  swift05-map
//
//  Created by 류성희 on 2016. 4. 29..
//  Copyright © 2016년 SwiftBook. All rights reserved.
//

import UIKit

class MovieListViewController : UITableViewController {
    
    var movieList : Array<MovieVO> = [];
    
    override func viewDidLoad() {
        let testData = TestData()
        testData.setTestData()
        
        movieList.appendContentsOf(testData.movieList)
    }
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        NSLog("self.movieList.count = %d", self.movieList.count)
        return self.movieList.count
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let row = self.movieList[indexPath.row]
        
        let cell = tableView.dequeueReusableCellWithIdentifier("MovieListCell") as! MovieListCell!
        cell.title?.text = row.title
        cell.desc?.text = row.desc
        cell.screenStartDay?.text = row.screenStartDay! + " open"
        cell.poster.image = UIImage(named: row.posterImageName!)
        
        return cell
    }
    
    override func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        // todo
    }
}
