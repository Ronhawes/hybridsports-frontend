import React from "react";

const AcademiesPage = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Our Academies</h1>
      <p className="text-lg mb-8">
        Our academies offer specialized training programs for athletes and individuals looking to improve their skills and performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AcademyCard
          name="Football Academy"
          description="Our football academy offers training programs for players of all ages and skill levels."
          image="https://via.placeholder.com/150"
          link="/academies/football"
        />
        <AcademyCard
          name="Basketball Academy"
          description="Our basketball academy provides training programs focused on skill development and team play."
          image="https://via.placeholder.com/150"
          link="/academies/basketball"
        />
        <AcademyCard
          name="Tennis Academy"
          description="Our tennis academy offers private and group lessons for players of all ages and skill levels."
          image="https://via.placeholder.com/150"
          link="/academies/tennis"
        />
        <AcademyCard
          name="Golf Academy"
          description="Our golf academy provides training programs focused on improving your game and reducing your score."
          image="https://via.placeholder.com/150"
          link="/academies/golf"
        />
        <AcademyCard
          name="Swim Academy"
          description="Our swim academy offers training programs for swimmers of all ages and skill levels."
          image="https://via.placeholder.com/150"
          link="/academies/swim"
        />
      </div>
    </div>
  );
};

const AcademyCard = ({ name, description, image, link }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm mb-4">{description}</p>
      <a href={link} className="btn btn-primary">
        Learn More
      </a>
    </div>
  );
};

export default AcademiesPage;