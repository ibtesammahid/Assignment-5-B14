
<div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  {/* Player Image */}
  <figure className="relative overflow-hidden">
    <img
      className="h-62.5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      src={player.playerImg}
      alt={player.playerName}
    />

    {/* Player Type Badge */}
    <div className="absolute right-3 top-3">
      <span className="rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold shadow backdrop-blur">
        {player.playerType}
      </span>
    </div>
  </figure>

  {/* Card Content */}
  <div className="p-5">

    {/* Player Name */}
    <div className="mb-3 flex items-center gap-2">
      <FaUser className="text-primary" />
      <h2 className="text-lg font-bold">
        {player.playerName}
      </h2>
    </div>

    {/* Origin */}
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-base-content/70">
        <FaFlag />
        <span>{player.origin}</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
        ⭐ {player.playerRating}
      </div>
    </div>

    <div className="divider my-2"></div>

    {/* Playing Style */}
    <div className="mb-5 grid grid-cols-2 gap-4">
      <div>
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
          Batting
        </p>
        <p className="text-sm font-semibold">
          {player.battingStyle}
        </p>
      </div>

      <div>
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
          Bowling
        </p>
        <p className="text-sm font-semibold">
          {player.bowlingStyle}
        </p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs text-base-content/50">
          Player Prize
        </p>

        <p className="text-lg font-bold text-primary">
          ${player.playerPrize}
        </p>
      </div>

      <button className="btn btn-primary rounded-lg px-5 shadow-sm transition-all hover:scale-105">
        Select Player
      </button>
    </div>

  </div>
</div>

