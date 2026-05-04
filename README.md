<h1 align="center">🌦️ Weather App — Real-Time Weather Dashboard</h1>

<p align="center">
  <b>Modern Weather Web Application (Group Project)</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Project-Group-blueviolet?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/API-OpenWeather-orange?style=for-the-badge&logo=cloud"/>
  <img src="https://img.shields.io/badge/Made%20With-JavaScript-yellow?style=for-the-badge&logo=javascript"/>
  <img src="https://img.shields.io/badge/UI-Glassmorphism-00C9A7?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge"/>
</p>

<hr>

<h2>🌍 Overview</h2>
<p>
A responsive <b>Weather Web Application</b> built as a <b>group project</b>.  
It allows users to search any city and get <b>real-time weather updates</b> including temperature, humidity, wind speed, and weather conditions.
</p>

<hr>

<h2>📸 Preview</h2>
<p align="center">
  <img src="images/preview.png" width="350" alt="Weather App Preview"/>
</p>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li>🔍 Search weather by city name</li>
  <li>🌡 Real-time temperature display</li>
  <li>💧 Humidity information</li>
  <li>🌬 Wind speed tracking</li>
  <li>☁ Weather condition description</li>
  <li>⚠ Error handling for invalid input</li>
  <li>🎨 Clean Glassmorphism UI design</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>
<table align="center">
  <tr>
    <th>Technology</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>HTML5</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td>CSS3</td>
    <td>Styling</td>
  </tr>
  <tr>
    <td>JavaScript (ES6)</td>
    <td>Logic & API Handling</td>
  </tr>
  <tr>
    <td>OpenWeather API</td>
    <td>Weather Data</td>
  </tr>
</table>

<hr>

<h2>⚙️ How It Works</h2>
<ol>
  <li>User enters a city name</li>
  <li>App sends request to weather API</li>
  <li>Receives real-time weather data</li>
  <li>Updates UI dynamically</li>
</ol>

<pre><code>
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${'ff23ba4b0cb3c26b2600b066e1b696da'}`);
}
</code></pre>

<hr>

<h2>📂 Project Structure</h2>
<pre><code>
📁 weather-app
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┣ 📄 script.js
 ┣ 📁 images
 ┗ 📄 README.md
</code></pre>

<hr>

<h2>🧠 Learning Outcomes</h2>
<ul>
  <li>API integration using Fetch</li>
  <li>DOM manipulation</li>
  <li>Error handling</li>
  <li>Responsive UI design</li>
  <li>Team collaboration workflow</li>
</ul>

<hr>

<h2>🔮 Future Improvements</h2>
<ul>
  <li>5-day weather forecast</li>
  <li>Dark / Light mode</li>
  <li>Auto location detection</li>
  <li>Smooth animations</li>
</ul>

<hr>

<h2>⭐ Support</h2>
<p>If you like this project, give it a ⭐ on GitHub!</p>

<p align="center">
  🚀 Built as a Group Project
</p>
