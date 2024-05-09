import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="box-border rounded-sm mx-2 h-24 w-auto p-4 border-1 bg-gradient-to-r from-cyan-600 to-teal-950"></div>
        <div>

        <div class="grid grid-flow-row m-2 max-w-48 p-2 border rounded-sm">
        <div class="box-border rounded-sm h-12 w-12 p-2 border-1  bg-gradient-to-r from-red-500 to-purple-600"></div>
            <a href="#">
                <h5 class="my-2 text-xs text-gray-900 dark:text-black">MyBlog</h5>
            </a>
            <div class = "">

            <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Name: </p>
            <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Birthday: </p>
            <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Followers: </p>
            <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Following: </p>
            <p class="text-xs text-gray-800 dark:text-gray-800">Bio: </p>
            
            </div>
        </div>

        <div class="m-2 max-w-48 p-2 border rounded-sm">
            <a href="#">
                <h5 class="mb-2 text-xs text-gray-900 dark:text-black">Likes:</h5>
            </a>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2">Add More +</span>
            <p class="my-2 text-xs text-gray-800 dark:text-gray-400">Looks like you haven't added one, check some out!</p>

            <a href="#">
                <h5 class="my-2 text-xs text-gray-900 dark:text-black">Communities:</h5>
            </a>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">Join More +</span>
            <p class="text-xs text-gray-800 dark:text-gray-400">Looks like you haven't added one, check some out!</p>
        </div>
        </div>

        <div class="m-2 border max-w-sm rounded-sm overflow-hidden shadow-lg">
          <div class="px-2 py-2">
            <div class="box-border rounded-sm h-24 w-24 p-2 border-1 bg-gradient-to-r from-green-600 to-green-200"></div>
            <div class=" font-bold text-sm my-2">Blog Post 1</div>
            <p class="text-gray-700 text-xs">This is my first blog post.</p>
          </div>
          <div class="px-2 pt-2 pb-2">
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#new</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#blog</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#2024</span>
          </div>
        </div>

        <div class="m-2 border max-w-sm rounded-sm overflow-hidden shadow-lg">
          <div class="px-2 py-2">
            <div class="box-border rounded-sm h-24 w-24 p-2 border-1 bg-gradient-to-r from-green-600 to-green-200"></div>
            <div class=" font-bold text-sm my-2">Blog Post 2</div>
            <p class="text-gray-700 text-xs">This is my first blog post.</p>
          </div>
          <div class="px-2 pt-2 pb-2">
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#new</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#blog</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#2024</span>
          </div>
        </div>

         <div class="m-2 border max-w-sm rounded-sm overflow-hidden shadow-lg">
          <div class="px-2 py-2">
            <div class="box-border rounded-sm h-24 w-24 p-2 border-1 bg-gradient-to-r from-green-600 to-green-200"></div>
            <div class=" font-bold text-sm my-2">Blog Post 3</div>
            <p class="text-gray-700 text-xs">This is my first blog post.</p>
          </div>
          <div class="px-2 pt-2 pb-2">
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#new</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#blog</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#2024</span>
          </div>
        </div>
            
        

        
      </div>
    )
  }
}
