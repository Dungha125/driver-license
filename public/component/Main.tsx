import React from "react";


const Main = () => {
    const pricing = [
        {
          package: 'Gói Cơ Bản',
          price: '13.999.000 VNĐ',
          features: [
            'Không bao gồm xe đưa đón',
            'Học lý thuyết cơ bản',
            '710 KM đường trường + sa hình',
          ],
        },
        {
          package: 'Gói Nâng Cao',
          price: '16.999.000 VNĐ',
          features: [
            'Bao gồm xe đưa đón',
            'Linh hoạt giờ học',
            'Học cabin mô phỏng',
          ],
        },
        {
          package: 'Gói VIP',
          price: '18.999.000 VNĐ',
          features: [
            'Nâng cao tình huống lái xe',
            'Hỗ trợ thực hành trên xe chip',
            'Trải nghiệm thực tế 3h',
          ],
        },
      ];

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-red-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold text-start uppercase">
          BẰNG LÁI XE PTIT
        </h1>
        <p className="text-start text-sm">Ưu đãi dành cho sinh viên và công nhân</p>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/anh.jpg')" }}
        >
        <div className="bg-[#00000082] bg-opacity-50 p-8 rounded-lg z-10">
            <h2 className="text-3xl font-bold">Học Lái Xe Chuyên Nghiệp</h2>
            <p className="mt-2">Học phí minh bạch - Không phát sinh thêm chi phí</p>
        </div>
        </section>

      {/* Bảng Giá */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h3 className="text-2xl font-bold text-center text-red-500">Bảng Giá B tự động</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {pricing.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-md p-6 text-center">
              <h4 className="text-lg font-bold text-red-600">{item.package}</h4>
              <p className="text-xl font-semibold">{item.price}</p>
              <ul className="mt-3 text-sm text-gray-700">
                {item.features.map((feature, i) => (
                  <li key={i} className="py-1">✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-6">
        <h3 className="text-2xl font-bold text-center text-red-500">Bảng Giá B số sàn</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {pricing.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-md p-6 text-center">
              <h4 className="text-lg font-bold text-red-600">{item.package}</h4>
              <p className="text-xl font-semibold">{item.price}</p>
              <ul className="mt-3 text-sm text-gray-700">
                {item.features.map((feature, i) => (
                  <li key={i} className="py-1">✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-6">
        <h3 className="text-2xl font-bold text-center text-red-500">Bảng Giá C1</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {pricing.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-md p-6 text-center">
              <h4 className="text-lg font-bold text-red-600">{item.package}</h4>
              <p className="text-xl font-semibold">{item.price}</p>
              <ul className="mt-3 text-sm text-gray-700">
                {item.features.map((feature, i) => (
                  <li key={i} className="py-1">✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-10">
        <p>© 2025 BLX PTIT.</p>
      </footer>
    </div>
  );
};

export default Main;
