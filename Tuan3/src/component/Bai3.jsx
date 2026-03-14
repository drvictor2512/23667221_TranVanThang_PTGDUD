import { useEffect, useState } from 'react'

function Bai3() {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (id) => {
    if (id < 1 || id > 10 || isNaN(id)) {
      setError("User not found (ID must be 1-10)")
      setUser(null)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      if (!res.ok) throw new Error('User not found')

      const data = await res.json()
      setUser(data)
    } catch (err) {
      setError(err.message)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData(userId)
  }, [userId])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bài 3 – Fetch theo tham số</h2>

      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Nhập User ID (1-10)"
      />

      <hr />

      {loading ? (
        <p>Đang tải...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : user ? (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      ) : null}
    </div>
  )
}

export default Bai3