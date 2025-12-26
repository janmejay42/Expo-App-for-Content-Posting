import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function EditPostScreen({ post, onBack }) {
  const [content, setContent] = useState(post.content);
  const [status, setStatus] = useState(post.status);

  const updatePost = async () => {
    try {
      await updateDoc(doc(db, "post", post.id), {
        content,
        status
      });
      Alert.alert("Updated");
      onBack();
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Edit Post</Text>
      <TextInput value={content} onChangeText={setContent} multiline />
      <TextInput value={status} onChangeText={setStatus} />
      <TouchableOpacity onPress={updatePost}><Text>Save</Text></TouchableOpacity>
      <TouchableOpacity onPress={onBack}><Text>Back</Text></TouchableOpacity>
    </View>
  );
}
