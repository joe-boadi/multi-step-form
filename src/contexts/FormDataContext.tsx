import styles from "../assets/styles/FormDataContext.module.css";
import { Steps, StepDetails } from "../Data/DataLogic";
import { usePersistedState } from "../hooks/usePersistance";
import  { FormStep }  from "../components/FormStep";
import { TitleForStep } from "../Helpers/TitleForSteps";
import Info from "../Utils/Info";
import PlanOptions from "../Utils/PlanOption";
import AddOns  from "../Utils/AddonOption";
import  Button  from "../Helpers/Button";
import { FinishUp } from "../components/FinishUp";

function FormPage() {
  const [nextPage, setnextPage] = usePersistedState("nextPage", 0);
  return (
    <section>
      <main className={styles.main}>
        <div className={styles.center}>
          <aside className={styles.leftaside}>
            <ul>
              {Steps().map((dt, id) =>
                <li className={styles.li} key={id}>
                  {
                    <FormStep
                    id_backGround_color = {
                        id === nextPage
                          ? "rgba(190, 226, 253, 1)"
                          : "transparent"
                      }
                      id_color={
                        id === nextPage ? "rgba(2, 41, 89, 1)" : "white"
                      }
                      borderColor={id === nextPage ? "transparent" : " white"}
                      formTitle={dt.title}
                      id={dt.id}
                    />
                  }
                </li>
              )}
            </ul>
          </aside>

          <aside className={styles.rightaside}>
            <div className={styles.mobileview}>
              {StepDetails().map((dt, index) => {
                if (index === nextPage) {
                  return (
                    <TitleForStep description={dt.description} title={dt.title} />
                  );
                }
              })}
              {nextPage === 0
                ? <form action="">
                    <Info />
                  </form>
                : nextPage === 1
                  ? <PlanOptions />
                  : nextPage === 2
                    ? <AddOns />
                    : <FinishUp
                        onClick={() => {
                          setnextPage(1);
                        }}
                      />}
            </div>
            <div className={styles.bottom}>
              {nextPage === 0
                ? <div />
                : <Button
                    backgroundColor="transparent"
                    color="gray"
                    name="Go back"
                    onClick={() => {
                      setnextPage(nextPage - 1);
                    }}
                  />}

              {nextPage === 3
                ? <Button
                    backgroundColor="rgba(72, 62, 255, 1)"
                    color="white"
                    name="Confirm"
                    onClick={() => {}}
                  />
                : <Button
                    backgroundColor=""
                    color="white"
                    name="Next Page"
                    onClick={() => {
                    setnextPage(nextPage + 1);
                    }}
                  />}
            </div>
          </aside>
        </div>
      </main>
    </section>
  );
}

export default FormPage;