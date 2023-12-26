import Avatar from "./Avatar";
import Card from "./Card";
import ClickOutHandler from 'react-clickout-handler'
import {useContext, useEffect, useState} from "react";
import Link from "next/link";
import ReactTimeAgo from "react-time-ago";
import {UserContext} from "../contexts/UserContext";
import {useSupabaseClient} from "@supabase/auth-helpers-react";

const Post = () => {
    const {profile:myProfile} = useContext(UserContext);
    console.log("pppppp:",myProfile?.id);
  return (
    <div>Post</div>
  )
}
export default Post

