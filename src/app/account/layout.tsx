export default function AccountLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <div className="flex h-[calc(100vh-5rem)]">
        <aside className="w-40 bg-gray-300  -z-10 flex justify-center items-center">
            SIDEBAR
        </aside>
        <main className="p-10">
            {children}
        </main>
    </div>
}