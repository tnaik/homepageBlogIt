import React, { Component } from 'react'
import logo from './Logo.png';

export default class Navbar extends Component {
  render() {
    return (
    <header class="bg-white">
        <nav class="mx-auto flex flex-row max-w-7xl items-center h-full justify-start p-2" aria-label="Global">
          <div class="flex lg:flex-1 gap-2">
            <img src={logo} alt="BlogIt!" class="w-5 h-5"></img>
            <h1 class="text-xs font-semibold self-center">Home</h1>
            <h1 class="text-xs font-semibold self-center">Feed</h1>
          </div>
        </nav>
    </header>
    )
  }
}
