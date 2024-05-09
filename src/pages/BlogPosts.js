import React, { Component } from 'react'

export default class BlogPosts extends Component {
    render() {
      return ( 
        <div className="flex-row">
            <div className='pt-4 px-2'>
            <span class="inline-block bg-cyan-200 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">New Blog Post +</span>
            <span class="inline-block bg-violet-200 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">Upload Media +</span>
            </div>

        <div className="flex">

        <div class="m-2 border w-60 rounded-sm overflow-hidden shadow-lg h-80">
          <div class="px-2 py-2">
            <div class="box-border rounded-sm h-24 w-24 p-2 border-1 bg-gradient-to-r from-purple-600 to-purple-200"></div>
            <div class=" font-bold text-sm my-2">5 Cafes to Try in OC</div>
            <p class="text-gray-700 text-xs">These are just a few of the many incredible cafes waiting to be discovered in Orange County. Whether you're a coffee connoisseur or simply looking for a cozy spot to relax, be sure to check out these cafes on your next visit to OC!</p>
          </div>
          <div class="px-2 pt-2 pb-2 ">
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#new</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#cafes</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#2024</span>
          </div>
        </div>

        <div class="m-2 border w-60 rounded-sm overflow-hidden shadow-lg h-80">
          <div class="px-2 py-2">
            <div class="box-border rounded-sm h-24 w-24 p-2 border-1 bg-gradient-to-r from-green-600 to-green-200"></div>
            <div class=" font-bold text-sm my-2">Top Ranked Sonny Angels</div>
            <p class="text-gray-700 text-xs">Sonny Angels are collectible miniature figurines that have captured the hearts of collectors worldwide.These adorable figurines come in blind boxes, adding an element of surprise and excitement to collecting them.</p>
          </div>
          <div class="px-2 pt-2 pb-2">
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#new</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#blog</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#2024</span>
          </div>
        </div>

        <div class="m-2 border w-60 rounded-sm overflow-hidden shadow-lg h-80">
          <div class="px-2 py-2">
            <div class="box-border rounded-sm h-24 w-24 p-2 border-1 bg-gradient-to-r from-red-600 to-red-200"></div>
            <div class=" font-bold text-sm my-2">Is the A24 Membership Worth It?</div>
            <p class="text-gray-700 text-xs">A24 Membership offers film enthusiasts an exclusive glimpse into the world of independent cinema.</p>
          </div>
          <div class="px-2 pt-2 pb-2">
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#new</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#movies</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#2024</span>
          </div>
        </div>

         <div class="m-2 border w-60 rounded-sm overflow-hidden shadow-lg h-80">
          <div class="px-2 py-2">
            <div class="box-border rounded-sm h-24 w-24 p-2 border-1 bg-gradient-to-r from-blue-600 to-blue-200"></div>
            <div class=" font-bold text-sm my-2">Every Artist Releasing New Music in May</div>
            <p class="text-gray-700 text-xs"> May is an exciting month for music enthusiasts as artists from various genres unleash their latest creations onto the world.</p>
          </div>
          <div class="px-2 pt-2 pb-2">
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#new</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#blog</span>
            <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#2024</span>
          </div>
        
        </div>
        </div>
        </div>
      );
    }
}