import React, { useEffect, useState } from "react";
import { TextInput, FlatList, Text, SafeAreaView, Image, TouchableOpacity,ScrollView } from "react-native";


import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function Search({navigation}) {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=true&language=en-US`,
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (text !== "") {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [text]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODM2MjliMzc4OGY4NThkYjNmMDZkZjExYzZhMzMwNyIsInN1YiI6IjY1ZDg2YmE4MTQ5NTY1MDE3YmY2MDNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0xPnrIFrlKiYkW2rRl0YuwR0ChK1T_GXQmOCgjSBvTk",
    },
  };

  const handlePress = (item) => {
    navigation.navigate('Action', { movie: item });
  };


const [movie,setMovie]=useState([])

  useEffect(()=>{
    Getmovie();
  })

const Getmovie =()=>{
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((response) => 
  {
    setMovie(response.results)
    console.log(response.results)
  })
  .catch(err => console.error(err));
  }
  return (
    
    <SafeAreaView style={{ flex: 1, paddingTop: 60,backgroundColor: 'black'  }}>
      <TextInput
        style={{ height: 40, marginBottom: 10, borderRadius: 15, alignItems: 'center', padding: 10, marginLeft: 40, marginRight: 50, marginTop: 20, backgroundColor: '#1a1919', color: 'white' }}
        placeholder="Type here to search movies"
        onChangeText={setText}
        defaultValue={text}
      />
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <SafeAreaView style={{ padding: 10 }}>
              <Image
                style={{ width: 100, height: 150 }}
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              />
              <Text style={{ marginTop: 5 }}>{item.original_title}</Text>
            </SafeAreaView>
          </TouchableOpacity>
        )}
      />
        <ScrollView>
 
        </ScrollView>
    </SafeAreaView>
  );
}




