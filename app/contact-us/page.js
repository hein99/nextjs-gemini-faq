import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-500 rounded-3xl p-8">
      <address className="not-italic text-neutral-100">
        <h1 className="text-red-300 font-semibold text-lg tracking-wide">
          Rangsit University
        </h1>
        <p className="my-4">
          No. 52/347 Mueang Ake Village, Phahonyothin Road, Lak Hok Subdistrict,
          Mueang District, Pathum Thani Province 12000
        </p>
        <dl>
          <div className="flex mt-2 text-sm">
            <dt>Tel: </dt>
            <dd>
              <Link
                href="tel:+6602-791-6000"
                className="ms-2 underline decoration-solid"
              >
                +6602-791-6000
              </Link>
            </dd>
          </div>
          <div className="flex mt-2 text-sm">
            <dt>Fax: </dt>
            <dd>
              <Link
                href="fax:+6602-791-6000"
                className="ms-2 underline decoration-solid"
              >
                +6602-791-6000
              </Link>
            </dd>
          </div>
          <div className="flex mt-2 text-sm">
            <dt>Email: </dt>
            <dd>
              <Link
                href="mailto:info@rsu.ac.th"
                className="ms-2 underline decoration-solid"
              >
                info@rsu.ac.th
              </Link>
            </dd>
          </div>
        </dl>
      </address>
    </div>
  );
}
