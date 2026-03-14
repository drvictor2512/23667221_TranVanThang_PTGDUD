import { useEffect, useState, useMemo } from 'react'

function Bai4() {
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            if (!res.ok) throw new Error('Failed to fetch')
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const filteredPosts = useMemo(() => {
        return posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [posts, searchTerm])

    return (
        <div style={{ padding: '20px' }}>
            <input
                type="text"
                placeholder="Tìm kiếm với useMemo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {loading ? <p>Loading...</p> : (
                <div>
                    {filteredPosts.map(item => (
                        <div key={item.id} style={{ marginBottom: '15px' }}>
                            <strong style={{ display: 'block' }}>{item.title}</strong>
                            <span>{item.body.substring(0, 50)}...</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Bai4
