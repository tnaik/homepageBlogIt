import React, { Component } from 'react'
import logo from './Logo.png';

export default class Navbar extends Component {
  render() {
    return (
    <header class="bg-white">
        <nav class="mx-auto flex flex-row max-w-8xl items-center h-full justify-start p-4 lg:px-6" aria-label="Global">
          <div class="flex lg:flex-1 gap-4">
            <img src={logo} alt="BlogIt!" class="w-6 h-6"></img>
            <h1 class="text-md font-bold">Home</h1>
            <h1 class="text-md font-bold">Feed</h1>
          </div>
        </nav>
    </header>
    )
  }
}