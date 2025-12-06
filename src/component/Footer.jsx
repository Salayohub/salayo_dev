const siteMeta = {
  name: "Salayo Hub",
  email: "salayohub@gmail.com",
};

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-gray-900">
      <section className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</div>
        <div className="flex items-center  text-slate-300 gap-4 text-sm">
          <a href={`mailto:${siteMeta.email}`} className="hover:text-accent">Email</a>
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">GitHub</a>
        </div>
      </section>
    </footer>
  )
}
