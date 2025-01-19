import React from 'react'
import useThemeSwiture from '../context/UserContext'

function Btn() {
  const { themeMode, lightTheme, darkTheme } = useThemeSwiture()
  const onchangeBtn = (e) => {
    const themeModeStatus = e.currentTarget.checked
    if (themeModeStatus) darkTheme()
    else lightTheme()
  }
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                onChange={onchangeBtn}
                checked={themeMode === "dark"}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
      {/* <input
        type="checkbox"
        
        value=""
        onChange={onchangeBtn}
        checked={themeMode === "dark"}
      /> */}
    </div>
  )
}

export default Btn