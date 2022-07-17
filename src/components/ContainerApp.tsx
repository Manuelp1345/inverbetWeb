import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, CircularProgress, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

export const ContainerApp = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);
  /*   const [openRegister, setopenRegister] = useState(false); */

  const handleCloseLogin = () => setOpenLogin(false);

  const getLogin = async (email: string, password: string) => {
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    const response = await fetch("http://localhost/server/login.php", {
      method: "POST",
      body: form,
    });
    const data = await response.text();
    console.log(data);
    return data;
  };

  const handleNext = () => {
    if (currentPage === 5) return;

    setCurrentPage(currentPage + 1);
    if (currentPage === 1) {
      if (document.querySelector("#box-two")) {
        // @ts-ignore
        document
          .querySelector("#box-two")
          .classList.remove("animate__fadeInLeft");
        // @ts-ignore

        document
          .querySelector("#box-two")
          .classList.add("animate__fadeOutLeft");
      }
    }
  };

  const handleBack = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
    if (currentPage === 1) {
      if (document.querySelector("#box-two")) {
        // @ts-ignore
        document
          .querySelector("#box-two")
          .classList.remove("animate__fadeInLeft");
        // @ts-ignore

        document
          .querySelector("#box-two")
          .classList.add("animate__fadeOutLeft");
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100wh",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        component="video"
        src="IMG/BACKGROUND_PLEXUS_INVERBET.mp4"
        autoPlay={true}
        loop
        muted
        sx={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          padding: "0",
          margin: "0",
          zIndex: "-1",
          objectFit: "cover",
        }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            component="img"
            src="IMG/ISOTIPO INVERBET_01.png"
            sx={{
              width: "6rem",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: "1.3rem",
              paddingTop: "1rem",
              fontWeight: "bold",
              fontFamily: "rexlia",
              letterSpacing: "0.5rem",
            }}
          >
            MENÚ
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "rexlia",
              letterSpacing: "0.5rem",
              color: "white",
              paddingTop: "1rem",
              fontSize: "1rem",
            }}
          >
            SÍGUENOS EN:
          </Typography>
          <Box
            component="img"
            src="IMG/INSTAGRAM.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/FACEBOOK.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/TIKTOK.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/YOUTUBE.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            component="img"
            src="IMG/WHATSAPP.png"
            sx={{
              height: "2.5rem",
              paddingTop: "0.5rem",
            }}
          />
          <Box
            sx={{
              height: "2.5rem",
              marginTop: "0.5rem",
              border: "1px solid white",
            }}
          />

          <Box sx={{ margin: "0 1rem" }}>
            <Button
              sx={{
                marginTop: "0.5rem",

                color: "white",
                fontFamily: "rexlia",
                letterSpacing: "0.3rem",
                border: "2px solid white",
                borderRadius: "1rem 0 0 1rem",
              }}
            >
              registrate
            </Button>
            <Button
              onClick={() => setOpenLogin(true)}
              sx={{
                marginTop: "0.5rem",
                color: "white",
                fontFamily: "rexlia",
                letterSpacing: "0.3rem",
                border: "2px solid white",
                borderRadius: "0 1rem 1rem 0",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button onClick={handleBack}>
          <KeyboardArrowLeft
            sx={{
              display: currentPage === 0 ? "none" : "block",
              color: "white",
              fontSize: "5rem",
            }}
          />
        </Button>
        {currentPage === 0 && (
          <Box
            id="box-one"
            className="animate__animated animate__fadeInLeft"
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Typography sx={{ fontFamily: "rexlia", fontSize: "1.5rem" }}>
              LA REVOLUCIÓN DEL TRADING DEPORTIVO
            </Typography>
            <Box
              component="img"
              src="IMG/BRAND INVERBET_07.png"
              sx={{ width: "70%" }}
            />
          </Box>
        )}
        {currentPage === 1 && (
          <Box
            id="box-two"
            className={
              currentPage === 1
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/I.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                TRADING <br /> DEPORTIVO
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Una manera inteligente de rentabilizar tu dinero.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 2 && (
          <Box
            id="box-three"
            className={
              currentPage === 2
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/N.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                INVERBET <br /> PREMIUM
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Todo lo necesario para operar de manera segura.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 3 && (
          <Box
            id="box-three"
            className={
              currentPage === 3
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/V.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                COWORKING <br /> INVERBET
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                El espacio perfecto para operar de manera guíada y segura.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 4 && (
          <Box
            id="box-three"
            className={
              currentPage === 4
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/E.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                INVERBET <br /> ACADEMY
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Metodos,estrategias,modelos y recomendaciones.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        {currentPage === 5 && (
          <Box
            id="box-three"
            className={
              currentPage === 5
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeInRight"
            }
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Box
              component="img"
              src="IMG/R.png"
              sx={{
                width: "30%",
                borderRight: "5px solid white",
                margin: "0 4rem",
              }}
            />
            <Box>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "4rem" }}>
                CASAS DE <br /> APUESTAS
              </Typography>
              <Typography sx={{ fontFamily: "rexlia", fontSize: "2.5rem" }}>
                Nuestros aliados para una operacion segura.
              </Typography>
              <Button
                sx={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  color: "white",
                  fontFamily: "rexlia",
                  letterSpacing: "0.3rem",
                  border: "2px solid white",
                  borderRadius: "1rem",
                }}
              >
                Leer más
              </Button>
            </Box>
          </Box>
        )}
        <Button onClick={handleNext}>
          <KeyboardArrowRight
            sx={{
              color: "white",
              display: currentPage === 5 ? "none" : "block",
              fontSize: "5rem",
              cursor: "pointer",
            }}
          />
        </Button>
      </Box>

      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "white",
            borderRadius: 2.5,
            boxShadow: 1,
            p: 1.5,
          }}
        >
          <Box
            sx={{
              borderRadius: 2.5,
              border: "2px solid white ",
              boxShadow: "inset 0 0 5px red,0 0 5px red",
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="IMG/ISOTIPO INVERBET_01.png"
              sx={{
                width: "6rem",
                filter: "drop-shadow(0px 0px 5px black)",
              }}
            />
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  // @ts-ignore

                  errors.email = "Correo requerido";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  // @ts-ignore

                  errors.email = "Correo invalido";
                }
                if (!values.password) {
                  // @ts-ignore

                  errors.password = "Contraseña requerida";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                console.log("values", values);
                let response;
                try {
                  response = await getLogin(values.email, values.password);
                } catch (error) {
                  response = "Ha ocurrido un error, intente nuevamente";
                }
                setSubmitting(false);
                setErrors({ password: response });
              }}
            >
              {({ isSubmitting }) =>
                (isSubmitting === false && (
                  <Form
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Field
                      style={{
                        width: "100%",
                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                        padding: "0.5rem",
                        fontFamily: "rexlia",
                        border: "1px solid #686868",
                        borderRadius: " 1rem",
                      }}
                      placeholder="Correo"
                      type="email"
                      name="email"
                    />

                    <ErrorMessage
                      //@ts-ignore
                      style={{
                        color: "red",
                        fontFamily: "rexlia",
                        fontSize: "0.8rem",
                        marginBottom: "0.5rem",
                      }}
                      name="email"
                      component="div"
                    />
                    <Field
                      style={{
                        width: "100%",

                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                        padding: "0.5rem",
                        fontFamily: "rexlia",
                        border: "1px solid #686868",
                        borderRadius: " 1rem",
                      }}
                      placeholder="Contraseña"
                      type="password"
                      name="password"
                    />
                    <ErrorMessage
                      //@ts-ignore
                      style={{
                        color: "red",
                        fontFamily: "rexlia",
                        fontSize: "0.8rem",
                        marginBottom: "0.5rem",
                      }}
                      name="password"
                      component="div"
                    />
                    <Button
                      sx={{
                        fontFamily: "rexlia",
                        fontSize: "0.7rem",
                        color: "gray",
                        marginBottom: "1rem",
                      }}
                    >
                      olvide mi contraseña
                    </Button>
                    <Button
                      sx={{
                        fontFamily: "rexlia",
                        fontSize: "0.7rem",
                        color: "white",
                        textShadow: "0 0 5px red,0 0 5px red",
                        borderRadius: 2.5,
                        border: "2px solid white ",
                        boxShadow: "inset 0 0 5px red,0 0 5px red",
                        marginBottom: "1rem",
                        width: "100%",
                      }}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Ingresar
                    </Button>
                  </Form>
                )) ||
                (isSubmitting === true && (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                ))
              }
            </Formik>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
