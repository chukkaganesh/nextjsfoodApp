'use client'

export default function Error({error}) {
    return <main className="error">
        <h1>An Error Occured!</h1>
        <p>Failed to fetch meal data. Please try again later.{console.log("err", error)}</p>
    </main>
}