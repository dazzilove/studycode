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
        theater1.theaterID = "CGV001"
        theater1.name = "CGV강남"
        theater1.address1 = "서울특별시 강남구 역삼동 814-6 스타플렉스"
        theater1.address2 = "서울특별시 강남구 강남대로 438 (역삼동)"
        theater1.latitude = 37.5081334
        theater1.longitude = 126.9263499
        theater1.theaterImage = "CGVgangnam.jpg"
        theaterList.append(theater1)
        
        let theater2 = TheaterVO()
        theater2.theaterID = "CGV002"
        theater2.name = "CGV명동"
        theater2.address1 = "서울특별시 중구 명동2가 83-5번지 눈스퀘어 8층"
        theater2.address2 = "서울특별시 중구 명동길 14 (명동)"
        theater2.latitude = 37.5634293
        theater2.longitude = 126.9829224
        theater2.theaterImage = "CGVmyeongdong.jpg"
        theaterList.append(theater2)
        
        let theater3 = TheaterVO()
        theater3.theaterID = "CGV003"
        theater3.name = "CGV상암"
        theater3.address1 = "서울특별시 마포구 성산동 515번지 월드컵몰 1층"
        theater3.address2 = "서울특별시 마포구 월드컵로 240, 1층(성산동)"
        theater3.latitude = 37.5699508
        theater3.longitude = 126.8990293
        theater3.theaterImage = "CGVsangam.jpg"
        theaterList.append(theater3)
        
        let theater4 = TheaterVO()
        theater4.theaterID = "CGV004"
        theater4.name = "CGV여의도"
        theater4.address1 = "서울특별시 영등포구 여의도동 국제금융로 10번지 국제금융센터 지하3층"
        theater4.address2 = "서울특별시 영등포구 국제금융로 10, 지하3층(여의도동)"
        theater4.latitude = 37.5251816
        theater4.longitude = 126.9248647
        theater4.theaterImage = "CGVyeouido.jpg"
        theaterList.append(theater4)
        
        let theater5 = TheaterVO()
        theater5.theaterID = "CGV005"
        theater5.name = "CGV청담씨네시티"
        theater5.address1 = "서울특별시 강남구 신사동 651-21"
        theater5.address2 = "서울특별시 강남구 도산대로 323 (신사동)"
        theater5.latitude = 37.5228759
        theater5.longitude = 127.0370422
        theater5.theaterImage = "CGVchungdam.jpg"
        theaterList.append(theater5)
        
    }
    
    
}
