import { useEffect, useState } from 'react'

function Bai1_2() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json()
            if (!res.ok) {
                throw new Error('Error')
            }
            setData(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>Error: {error}</p>
                ) : (
                    data.map(item => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    )

}

export default Bai1_2
