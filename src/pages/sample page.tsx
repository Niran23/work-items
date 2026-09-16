function MyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#60a5fa]">
          Niranjani
        </h1>

        <div className="flex gap-3">
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#d1d5db] mb-6">
        <button className="pb-3 text-[#60a5fa] font-bold">
          Profile
        </button>

        <button className="pb-3 text-[#666666]">
          Skills
        </button>

        <button className="pb-3 text-[#666666]">
          Projects
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl p-6 mb-6">

        <h2 className="text-2xl font-bold text-[#222222] mb-2">
          My Profile
        </h2>

        <p className="text-[#666666] mb-4">
          Learning React, TypeScript and Tailwind CSS
        </p>

        <button onClick={() => alert("Hello Niranjani!")} 
        className="px-5 py-2 rounded-lg bg-[#60a5fa] text-white cursor-grap">
          View Profile
        </button>

      </div>

      {/* Skills Table */}
      <div className="bg-white rounded-xl p-6">

        <h2 className="text-xl font-bold text-[#222222] mb-4">
          My Skills
        </h2>

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-[#60a5fa] text-white">
              <th className="p-3 text-left">Skill</th>
              <th className="p-3 text-left">Level</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">React</td>
              <td className="p-3">Beginner</td>
              <td className="p-3">Learning</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">TypeScript</td>
              <td className="p-3">Beginner</td>
              <td className="p-3">Learning</td>
            </tr>

            <tr>
              <td className="p-3">Tailwind CSS</td>
              <td className="p-3">Beginner</td>
              <td className="p-3">Learning</td>
            </tr>
          </tbody>

        </table>
        <div className="flex justify-end mt-8">
  <button className="px-5 py-2 rounded-lg bg-[#334155] text-white">
    Exit
  </button>
</div>

      </div>

    </div>
  )
}

export default MyPage