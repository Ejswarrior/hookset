import PostForm from "@/components/BasicComponents/PostForm/PostForm"
import React from "react"

export default function PostPage() {
	return (
		<div>
			<h1>Post your catch</h1>
			<p>Input for fish</p>

			<h2>Weight:</h2>
			<p>input for weight</p>

            
			<h2>Height:</h2>
			<p>input for height</p>

			<h2>What bait did you use?</h2>
			<p>input for height</p>


			<map>Where was your catch?</map>


			<PostForm 
				placeHolder="Tell everyone your story"
				id='post'
				required
				maxLength={200}
				name='post'
				helperText="Every fish has a story"
				error={false}
			/>
		</div>
	)

}