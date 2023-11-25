
export default function ProfileID({ params }: { params: { id: string } }) {

    console.log(params.id)


    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       My profile page - {params.id}
      </main>
    )
  }
  