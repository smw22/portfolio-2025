export default function About() {
  return (
    <div className="component-wrapper grid gap-8">
      <div>
        <h2 className="font-bold text-2xl mb-4">OM MIG</h2>
        <div className="flex flex-col gap-2 text-md">
          <p>
            Mit navn er <strong> Sergio Morón Westergaard</strong>. Jeg er
            studerende på Webudvikling ved Erhvervsakademi Aarhus og har en
            baggrund som multimediedesigner.
          </p>
          <p>
            Jeg elsker at kode og udfordre mig selv med nye teknologier og
            kreative løsninger.
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4">ERFARING</h2>
        <div className="grid gap-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Frontendudvikler</h3>
            <div className="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8">
                <img
                  src="/logos/azorhomes.png"
                  alt="Azorhomes logo"
                  width={45}
                  className="rounded-full"
                />
                <p className="font-semibold">Azorhomes</p>
              </div>

              <p>April 2025 - Juni 2025</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Frontendudvikler</h3>
            <div className="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8">
                <img
                  src="/logos/grumsen.png"
                  alt="Grumsen Development logo"
                  width={45}
                  className="rounded-full"
                />
                <p className="font-semibold">Grumsen Development</p>
              </div>
              <p>Jan 2025 - Marts 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
