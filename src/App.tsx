import React from 'react';

interface Planet {
  name: string;
  diameter: number;
  distanceFromSun: number;
  orbitalPeriod: number;
  numberOfMoons: number;
  imageUrl: string;
  color: string;
}

const planets: Planet[] = [
  {
    name: 'Mercury',
    diameter: 4879,
    distanceFromSun: 58,
    orbitalPeriod: 88,
    numberOfMoons: 0,
    imageUrl: 'https://wallpaperaccess.com/full/2920191.jpg',
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Venus',
    diameter: 12104,
    distanceFromSun: 108,
    orbitalPeriod: 225,
    numberOfMoons: 0,
    imageUrl: 'https://wallpaperaccess.com/full/3640653.jpg',
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Earth',
    diameter: 12756,
    distanceFromSun: 150,
    orbitalPeriod: 365,
    numberOfMoons: 1,
    imageUrl: 'https://th.bing.com/th/id/OIP.lyRTgWdMQ6EXeZP4vBIk-QHaEK?rs=1&pid=ImgDetMain',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'Mars',
    diameter: 6792,
    distanceFromSun: 228,
    orbitalPeriod: 687,
    numberOfMoons: 2,
    imageUrl: 'https://wallpaperaccess.com/full/538127.jpg',
    color: 'from-red-400 to-red-600'
  },
  {
    name: 'Jupiter',
    diameter: 142984,
    distanceFromSun: 778,
    orbitalPeriod: 4333,
    numberOfMoons: 95,
    imageUrl: 'https://th.bing.com/th/id/OIP.lHU2m8SpZJ9YLthSsSz1ogHaEK?rs=1&pid=ImgDetMain',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'Saturn',
    diameter: 120536,
    distanceFromSun: 1432,
    orbitalPeriod: 10759,
    numberOfMoons: 146,
    imageUrl: 'https://th.bing.com/th/id/OIP.aNltyEhqAK5xsGuA_2m0OQHaEo?rs=1&pid=ImgDetMain',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    name: 'Uranus',
    diameter: 51118,
    distanceFromSun: 2867,
    orbitalPeriod: 30687,
    numberOfMoons: 27,
    imageUrl: 'https://wallpaperaccess.com/full/1661585.jpg',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Neptune',
    diameter: 49528,
    distanceFromSun: 4515,
    orbitalPeriod: 60190,
    numberOfMoons: 14,
    imageUrl: 'https://th.bing.com/th/id/OIP.3OkGx-PtB3ht-CX3w-PVTgHaEK?rs=1&pid=ImgDetMain',
    color: 'from-blue-500 to-indigo-600'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-thin tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
              SOLAR SYSTEM
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
            <p className="text-gray-400 text-lg font-light tracking-wide">
              Planetary Data Archive
            </p>
          </div>
        </div>

        {/* Table Container */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-6 px-8 text-gray-300 font-light text-sm uppercase tracking-wider">
                    Planet
                  </th>
                  <th className="text-center py-6 px-4 text-gray-300 font-light text-sm uppercase tracking-wider">
                    Diameter
                    <div className="text-xs text-gray-500 normal-case">km</div>
                  </th>
                  <th className="text-center py-6 px-4 text-gray-300 font-light text-sm uppercase tracking-wider">
                    Distance
                    <div className="text-xs text-gray-500 normal-case">million km</div>
                  </th>
                  <th className="text-center py-6 px-4 text-gray-300 font-light text-sm uppercase tracking-wider">
                    Orbit
                    <div className="text-xs text-gray-500 normal-case">days</div>
                  </th>
                  <th className="text-center py-6 px-4 text-gray-300 font-light text-sm uppercase tracking-wider">
                    Moons
                  </th>
                </tr>
              </thead>
              <tbody>
                {planets.map((planet, index) => (
                  <tr 
                    key={planet.name}
                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <td className="py-6 px-8">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div 
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${planet.color} shadow-lg flex items-center justify-center overflow-hidden border border-white/20 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <img 
                              src={planet.imageUrl}
                              alt={planet.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-light text-white mb-1">
                            {planet.name}
                          </h3>
                          <div className="text-xs text-gray-500 font-mono">
                            #{String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center">
                      <div className="text-white font-mono text-sm">
                        {planet.diameter.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center">
                      <div className="text-white font-mono text-sm">
                        {planet.distanceFromSun.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center">
                      <div className="text-white font-mono text-sm">
                        {planet.orbitalPeriod.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 text-sm font-mono group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                        {planet.numberOfMoons}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="inline-block">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4"></div>
            <p className="text-gray-500 text-sm font-light tracking-wide">
              Data sourced from NASA & International Astronomical Union
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;