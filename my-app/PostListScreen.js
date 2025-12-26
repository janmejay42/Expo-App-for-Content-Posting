import { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function PostListScreen({ onEdit }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "post")).then(snap => {
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={i => i.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.content}</Text>
          <Text>Status: {item.status}</Text>
          <TouchableOpacity onPress={() => onEdit(item)}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
