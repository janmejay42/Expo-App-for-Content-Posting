

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import LoginScreen from "./LoginScreen";
import PostListScreen from "./PostListScreen";
import EditPostScreen from "./EditPostScreen";

export default function App() {
  const [user, setUser] = useState(null);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  if (!user) return <LoginScreen />;
  if (editPost) {
    return <EditPostScreen post={editPost} onBack={() => setEditPost(null)} />;
  }

  return <PostListScreen onEdit={setEditPost} />;
}

