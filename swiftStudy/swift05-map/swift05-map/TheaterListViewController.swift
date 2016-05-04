//
//  TheaterListViewController.swift
//  swift05-map
//
//  Created by 류성희 on 2016. 4. 29..
//  Copyright © 2016년 SwiftBook. All rights reserved.
//

import UIKit

class TheaterListViewController: UITableViewController {
    
    var theaterList : Array<TheaterVO> = [];
    
    @IBOutlet var theaterTable: UITableView!
    
    override func viewDidLoad() {
        let testData = TestData()
        testData.setTheaterList()
        theaterList.appendContentsOf(testData.theaterList)
    }
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.theaterList.count
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let row = self.theaterList[indexPath.row]
        let cell = tableView.dequeueReusableCellWithIdentifier("TheaterListCell") as! TheaterListCell
        
        cell.name.text = row.name
        cell.address.text = row.address1
        cell.theaterImage.image = UIImage(named: row.theaterImage!)
        
        return cell
    }
    
}
