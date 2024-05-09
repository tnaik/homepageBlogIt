import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>

        <div>

        <div class="grid grid-flow-row m-2 max-w-48 p-2 border rounded-sm">
        <div class="box-border rounded-sm h-12 w-12 p-2 border-1  bg-gradient-to-r from-red-500 to-purple-600"></div>
            <a href="#">
                <h5 class="my-2 text-xs text-gray-900 dark:text-black">MyBlog</h5>
            </a>
            <div>

            <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Name: Jane Doe</p>
            <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Birthday: 01, 01, 2001</p>
            <div>
              <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Followers: 1</p>
            </div>
            <div>
              <p class="my-2 text-xs text-gray-800 dark:text-gray-800">Following: 1</p>
            </div>
            <p class="text-xs text-gray-800 dark:text-gray-800">Bio: </p>
            <p class="text-xs text-gray-400 dark:text-gray-400">I've made it my mission to dive into the pages of countless books, from timeless classics to hidden gems waiting to be discovered.</p>
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
      </div>
    )
  }
}
