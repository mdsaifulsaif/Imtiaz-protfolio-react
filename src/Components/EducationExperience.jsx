import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Item = ({ icon, title, org, date, description }) => (
  <div className="flex gap-4 items-start">
    <div className="text-2xl text-white bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">
        {org} / {date}
      </p>
      <p className="mt-2 text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);

function EducationExperience() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-6">🎓 Education</h2>
          <div className="space-y-8">
            <Item
              icon={<FaGraduationCap />}
              title="Bachelor of Business Administration"
              org="Daffodil International University"
              date="Running"
              description="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            />
            <Item
              icon={<FaGraduationCap />}
              title="Ideal School and College"
              org="Harvard University"
              date="2020 - 2021"
              description="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            />
            <Item
              icon={<FaGraduationCap />}
              title="Secondary School Certificate"
              org="Ekhlaspur High School"
              date="2019"
              description="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            />
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-6">💼 My Experience</h2>
          <div className="space-y-8">
            <Item
              icon={<FaBriefcase />}
              title="Marketing Specialist"
              org="Click The Photo"
              date=""
              description="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            />
            <Item
              icon={<FaBriefcase />}
              title="Marketing Executive"
              org="E-learning and earning ltd."
              date=""
              description="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            />
            <Item
              icon={<FaBriefcase />}
              title="Unit Coordinator"
              org="Meghna Group of Industries"
              date=""
              description="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationExperience;
