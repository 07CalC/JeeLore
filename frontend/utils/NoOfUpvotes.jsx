

export const NoOfUpvotes = async (id) => {
  try {
    const res = await fetch(`/api/qsn/getNoOfUpvotes`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id
      }),
    })
    const data = await res.json()
    return data

  } catch (error) {

  }

}
