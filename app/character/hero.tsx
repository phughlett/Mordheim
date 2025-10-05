import { HeroExp } from "./experience/heroExp";
import { ExperienceBox } from "./experience/experience";
import { StatsTable } from "./stats/statsTable";
import { LabelTextArea } from "./info/textArea";
import { SelectionDropdown } from "./info/selectionDropdown";
import { useState } from 'react';

export function Hero() {
  const [experience, setExperience] = useState(0)

  function experienceChange(event: React.MouseEvent<HTMLButtonElement>) {

    if ((event.target as HTMLInputElement).name === "minus") {

      if (experience > 0) {
        setExperience(experience - 1)
      }

    }
    if ((event.target as HTMLInputElement).name === "plus") {
      if (experience < 90) {
        setExperience(experience + 1)
      }

    }
  }

  return (
    <div className="justify-center items-center border">
      <div className="grid grid-cols-3 place-items-center">
        <div className="col-span-1">
          <StatsTable />
        <div className="grid grid-cols-2">
          <div className="col-span-2"><LabelTextArea label="Name" rows={1} /></div>
          <div className="col-span-1"><SelectionDropdown label="Race"/></div>
          <div className="col-span-1"><SelectionDropdown label="Character" /></div>
          <div className="col-span-2"><ExperienceBox experience={experience} handleExpChange={experienceChange} /></div>
        </div>
        </div>
        <div className="grid grid col-2 col-span-2">
        <div><LabelTextArea label="Equipment" rows={8} /></div>
        <div><LabelTextArea label="Skills and Spells" rows={8} /></div>
        <div className="col-span-2 row-span-1"><HeroExp experience={experience} /></div>
        </div>
      </div>
    </div>
  );
}

