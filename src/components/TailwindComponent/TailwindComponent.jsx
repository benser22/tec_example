import React from "react";
import "sweetalert2/dist/sweetalert2.min.css"; // Importa los estilos de SweetAlert2
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

function TailwindComponent() {
  // Estado para controlar la apertura de la alerta de SweetAlert
  const buttonStyle =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2";

  const showAlertBasic = () => {
    Swal.fire("¡Hola, mundo!");
  };

  const showAlertWithTitleText = () => {
    Swal.fire("Título de la alerta", "Este es el texto de la alerta");
  };

  const showAlertWithCustomIcon = () => {
    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "Operación completada con éxito",
    });
  };
  const showAlertWithCustomIcon2 = () => {
    Swal.fire({
      icon: "error", // Cambiado de "warning" a "error"
      title: "Error",
      text: "Ha ocurrido un error",
    });
  };

  const showConfirmationDialog = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás deshacer esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado", "Tu registro ha sido borrado.", "success");
      }
    });
  };

  const showInputDialog = () => {
    Swal.fire({
      title: "Ingrese algo",
      input: "text",
      inputLabel: "Escriba algo:",
      inputPlaceholder: "Escriba aquí",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Debe escribir algo.";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Ingresado", `Ingresaste: ${result.value}`, "success");
      }
    });
  };
  // Definir una función para guardar la configuración (reemplaza esto con tu lógica real)
  const saveSettings = (settings) => {
    return new Promise((resolve, reject) => {
      // Simula una operación de guardado
      setTimeout(() => {
        // Supongamos que la operación de guardado tiene éxito
        const success = true;

        if (success) {
          resolve(settings); // Resuelve la promesa si es exitoso
        } else {
          reject("Error al guardar la configuración"); // Rechaza la promesa en caso de error
        }
      }, 2000); // Simula una demora de 2 segundos
    });
  };

  // Definir una variable de configuración (reemplaza esto con tus datos reales)
  const settings = {
    // Tus configuraciones aquí
  };

  return (
    <div className="bg-gray-200 p-4 m-4">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-4">Tailwind</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Grid Layout</h2>
          <p className="text-sm text-gray-600">Using grid for layout.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Buttons</h2>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 transition hover:bg-blue-700">
            Tailwind CSS Button
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Cards</h2>
          <div className="bg-blue-200 p-2 rounded-lg mt-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-sm text-gray-600">
              Some card content goes here.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-red-500 font-semibold">
          This is a red warning message.
        </p>
      </div>

      {/* Botonera de alertas */}
      <div className="bg-white p-4 rounded shadow-md mt-6 ">
        <h2 className="text-xl font-semibold text-gray-800">
          Botonera de Alertas Toast
        </h2>
        <button
          onClick={() => {
            // Mostrar notificación de éxito con react-hot-toast
            toast.success("Esto es una notificación de éxito");
          }}
          className="bg-green-500 text-white font-bold mr-4 py-2 px-4 rounded mt-2 transition hover:bg-green-700"
        >
          Notificación de Éxito
        </button>
        <button
          onClick={() => {
            // Mostrar notificación de advertencia con react-hot-toast
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-20 w-20 rounded-full"
                        src="https://media.licdn.com/dms/image/C4E03AQEv4jdtgdx1ww/profile-displayphoto-shrink_800_800/0/1649809386015?e=2147483647&v=beta&t=Su6IQqL_F_2yqMmZxyalXFEzkK2re3GSUt6NhSA17Cg"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-xl font-medium text-gray-900">
                        Jorge Vega
                      </p>
                      <p className="mt-1 text-xl text-gray-500">
                        Hello Chikis!!!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ));
          }}
          className="mr-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-2 transition hover:bg-yellow-700"
        >
          Notificación Toaster personalizada con Tailwind
        </button>
        <button
          onClick={() => {
            toast.promise(
              saveSettings(settings), // Reemplaza saveSettings con tu función para guardar la configuración
              {
                loading: "Saving...",
                success: <b>Settings saved!</b>,
                error: <b>Could not save.</b>,
              }
            );
          }}
          className="bg-blue-500 text-white font-bold mr-4 py-2 px-4 rounded mt-2 transition hover:bg-blue-700"
        >
          Notificación de Promesa
        </button>
        <button
          onClick={() => {
            // Mostrar notificación de error con react-hot-toast
            toast.error("Esto es una notificación de error");
          }}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-2 transition hover:bg-red-700"
        >
          Notificación de Error
        </button>
        {/* Agrega más botones de alerta según tus necesidades */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mt-6 ">
        <h2 className="text-xl font-semibold text-gray-800">
          Botonera de Alertas Sweet2
        </h2>
        <button onClick={showAlertBasic} className={buttonStyle}>
          Alerta Básica
        </button>
        <button onClick={showAlertWithTitleText} className={buttonStyle}>
          Alerta con Título y Texto
        </button>
        <button onClick={showAlertWithCustomIcon} className={buttonStyle}>
          Alerta con Icono Satisfactorio
        </button>
        <button onClick={showAlertWithCustomIcon2} className={buttonStyle}>
          Alerta con Icono Error
        </button>
        <button onClick={showConfirmationDialog} className={buttonStyle}>
          Diálogo de Confirmación
        </button>
        <button onClick={showInputDialog} className={buttonStyle}>
          Diálogo de Entrada
        </button>
      </div>

      {/* Componente Toast para mostrar notificaciones */}
      <Toaster position="bottom-right" />
    </div>
  );
}

export default TailwindComponent;
