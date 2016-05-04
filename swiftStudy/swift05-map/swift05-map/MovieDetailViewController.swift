import UIKit

class MovieDetailViewController : UIViewController {
    
    var movieVO : MovieVO? = nil
    
    @IBOutlet var navibar: UINavigationItem!
    
    @IBOutlet var poster: UIImageView!
    
    @IBOutlet var movieTitle: UILabel!
    
    @IBOutlet var desc: UILabel!
    
    override func viewDidLoad() {
        self.navibar.title = self.movieVO?.title
        
        self.movieTitle.text = self.movieVO?.title
        self.desc.text = self.movieVO?.desc
        
        let posterURL = self.movieVO?.posterImageName
        self.poster.image = UIImage(named: posterURL!)
    }

    
    
    
    
}