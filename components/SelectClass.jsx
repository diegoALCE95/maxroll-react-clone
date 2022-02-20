const SelectClass = () => {
  return (
    <div className="classes p-5">
      <h2 className="text-blue font-bold">Select a Class</h2>
      <div className="grid grid-cols-5 pt-5 gap-x-2">
        <div className="class-wrapper">
          <img className="frame" src="/img/classes/warrior.jpg" />
          <p className="text-white font-bold text-center pt-3">Warrior</p>
        </div>
        <div className="class-wrapper">
          <img className="frame" src="/img/classes/martial-artist.jpg" />
          <p className="text-white font-bold text-center pt-3">Martial Artist</p>
        </div>
        <div className="class-wrapper">
          <img className="frame" src="/img/classes/gunner.jpg" />
          <p className="text-white font-bold text-center pt-3">Gunner</p>
        </div>
        <div className="class-wrapper">
          <img className="frame" src="/img/classes/mage.jpg" />
          <p className="text-white font-bold text-center pt-3">Mage</p>
        </div>
        <div className="class-wrapper">
          <img className="frame" src="/img/classes/assassin.jpg" />
          <p className="text-white font-bold text-center pt-3">Assasin</p>
        </div>
      </div>
    </div>
  )
}

export default SelectClass;