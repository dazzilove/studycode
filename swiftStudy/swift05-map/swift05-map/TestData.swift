//
//  MovieTheaterData.swift
//  swift05-map
//
//  Created by 류성희 on 2016. 4. 29..
//  Copyright © 2016년 SwiftBook. All rights reserved.
//

import Foundation

class TestData {
    
    var movieList = Array<MovieVO>()
    var theaterList = Array<TheaterVO>()
    
    func setTestData() {
        self.setMovieList()
        self.setTheaterList()
    }
    
    func setMovieList() {
        
        let movie1 = MovieVO()
        movie1.movieId = ""
        movie1.title = "Star Wars: The Force Awakens"
        movie1.desc = "Experience the motion picture event of a generation in Star Wars: The Force Awakens. Then uncover the secrets behind the making of the movie in a feature-length documentary. Plus Deleted Scenes and other spectacular bonus content."
        movie1.screenStartDay = "2015.12.17"
        movie1.posterImageName = "StarWars.jpg"
        movieList.append(movie1)
        
        let movie2 = MovieVO()
        movie2.movieId = ""
        movie2.title = "The Revenant"
        movie2.desc = "Leonardo DiCaprio and Tom Hardy star in Alejandro G. Iñárritu's visceral, epic tale of survival and betrayal inspired by true events that's set in America's uncharted wilderness."
        movie2.screenStartDay = "2016.01.14"
        movie2.posterImageName = "TheRevenant.jpg"
        movieList.append(movie2)
        
        let movie3 = MovieVO()
        movie3.movieId = ""
        movie3.title = "The Hateful Eight"
        movie3.desc = "In THE HATEFUL EIGHT, a stagecoach hurtles through the wintry Wyoming landscape. The passengers, bounty hunter John Ruth and his fugitive Daisy Domergue, race towards the town of Red Rock."
        movie3.screenStartDay = "2016.01.07"
        movie3.posterImageName = "TheHatefulEight.jpg"
        movieList.append(movie3)
        
        let movie4 = MovieVO()
        movie4.movieId = ""
        movie4.title = "Mr. Right"
        movie4.desc = "A young woman who's been unlucky in love discovers her perfect match is a professional hitman in this killer comedy starring Anna Kendrick, Sam Rockwell and Tim Roth."
        movie4.screenStartDay = "2015"
        movie4.posterImageName = "MrRight.jpg"
        movieList.append(movie4)
        
    }
    
    func setTheaterList() {
        let theater1 = TheaterVO()
        theater1.theaterID = ""
        theater1.name = ""
        theater1.address = ""
        theater1.latitude = 0.0
        theater1.longitude = 0.0
        theaterList.append(theater1)
        
        
    }
    
    
}
