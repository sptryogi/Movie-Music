#GOLDFARB 5
GOLDFARB 5 is the project based on Machine Learning in for recommendation System movies

Website link: https://siabang35-recomsystem-main-b4envl.streamlit.app/

Demonstrate the use of Recommendation System :
  1. Helps to Improve the on-site experience by creating dynamic recommendations for different kinds of audiences like Netflix does.
  2. Helps to categories the product based on their features. Eg: Material, Season, etc.

* Acknowledgement points:-
  1. This Project is part of Microsoft Engage Program.
  2. The data fetched is 95% accurate and fetched from the pre available websites such as kaggle.com , movielens.org etc.
  3. There is no plagirism issue as per design and code, i am sole contributor 

### TECH STACK USED
* Python
* Streamlit



<img src="./assets/images/gopal-movie1.png">


First of all you need to **SIGN UP** in the page using ( You can use any username and password for login ):- 
  
   <img src="./assets/images/login.png">
   
  
  
Data Preprocessing Code : <a href="https://github.com/siabang35/Movies-notebook/blob/master/genres_based_search.ipynb">Data Preprocessing</a>
  
  
  


### Three Recommendation Type:
<ul>
  <li>Section A: Movie based</li>
  <li>Section B: Person based(cast Member)</li>
  <li>Section C: genres based</li>
</ul>

## Section A: Movie based

In this, a user can select the number of recommendations they want related to a specific movie selected by the movie name.

#### Result with poster

<img src="./assets/images/movie.png">

#### Result without poster

<img src="./assets/images/with out poster result.png">



### Four Algorithm Type:
<ul>
  <li>Section A.1: Content Based (TF-IDF)</li>
  <li>Section A.2: Content Based (Bag Of Words)</li>
  <li>Section A.3: Item-Item Collaborative Based</li>
  <li>Section A.4: K Nearest Neighbor (Item Based)</li>
</ul>



### Section A.1: Content Based (TF-IDF)

This algorithm uses TfidfVectorizer for vector conversion and Cosine Similarity for calculating the angle between two vectors. On the basis of the movie name selected by the user, this algorithm retruns a list of movies sorted in descending order with respect to similarity, which is taken from the similarity matrix (which contains similarity score for each movie).


### Section A.2: Content Based (Bag Of Words)

Bag of Words uses the same technique as TF-IDF, but the score is calculated based on the frequency of the most repetitive words in the movie's content, and the similarity score is calculated in the same way as in TF-IDF.


### Section A.3: Item-Item Collaborative Based

In this algorithm, a user rating for a specific movie is calculated on the basis of how other user rate same movie, and by taking some real time rartings, we can show recommendations to users.

<img src="./assets/images/movie-collaborative.png">


### Section A.4: K Nearest Neighbor (Item Based)

User ratings are predicted here same as in Item-Item Collaborative filtering, but for calculating distance it uses euclidean and manhattan distance between two vectors, and according to that, forms a similarity matrix, then shows recommendations to the user with respect to a specific movie which is selected by the user.




## Section B: Person based(cast Member)

Users can also get recommendations on the basis of a person who has appeared in movies as a lead actor or director.

First, all movies in which that person is cast as an actor or director are sorted in reverse order according to the average rating and if the number of recommendations is greater than that person's movies, then the user gets recommendation on the basis of the first movie which is going to be recommended first to the user.

<img src="./assets/images/artist-movies.png">




## Section C: genres based

This recommendation is based on those movies which have the same genres as selected by the user and then sorted in reverse order according to average ratings of each movie.

Code: <a href="https://github.com/siabang35/Movies-notebook/blob/master/genres_based_search.ipynb">Generes Based Search.ipynb</a>

<img src="./assets/images/genre-movies.png">

# Installation

 Make a folder in your system and clone the project using git bash then open the project in Visual Studio Code or any IDE you prefer.

##### Clone the project 
  ```
  git clone https://github.com/siabang35/recomSystem.git

  ```

 

after cloning the project get into main directory

  


 ⚠️ Make sure pip is already installed otherwise check out https://pip.pypa.io/en/stable/installation/
  
 ⚠️ Python version sholud be `3.9.12` or higher ( if you want to download then check out https://www.python.org/downloads/ )
  
  
now install all library

`pip install -r requirements.txt`




# Set Up

To open webapp on your local machine

`streamlit run main.py`



--------------------
# Hope You Like the Project ❤️❤️❤️



## Peace to everyone 🙏🏻

