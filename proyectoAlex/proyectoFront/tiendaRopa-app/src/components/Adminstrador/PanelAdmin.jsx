import { useEffect, useState } from "react";
import {
  create,
  findAll,
  remove,
  update,
} from "../../services/ProductoService";
import { ProductoGrid } from "../Producto/ProductoGrid";
import { CreacionProductoForm } from "../Producto/CreacionProductoFrom";
import {
  borrarUsuarioPorId,
  listadoInfoCuentas,
} from "../../services/UsuarioService";
import { UsuarioGrid } from "../Usuario/UsuarioGrid";
import {
  listadoPedidos,
  borrarPedidoPorId,
} from "../../services/PedidoService";
import { PedidoGrid } from "../Pedido/PedidoGrid";

export const PanelAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [productoSelected, setProductoSelected] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria: "",
    talla: "",
    rutaImagen: "",
  });
  const [activeTab, setActiveTab] = useState("productos"); // Pestaña activa por defecto

  const fetchData = async (type) => {
    try {
      let result;
      if (type === "productos") result = await findAll();
      else if (type === "usuarios") result = await listadoInfoCuentas();
      else if (type === "pedidos") result = await listadoPedidos();

      if (result?.data) {
        if (type === "productos") setProductos(result.data);
        else if (type === "usuarios") setUsuarios(result.data);
        else if (type === "pedidos") setPedidos(result.data);
      } else {
        console.error(`API ${type} sin datos o estructura incorrecta.`);
      }
    } catch (error) {
      console.error(`Error al obtener ${type}:`, error);
    }
  };

  useEffect(() => {
    fetchData("productos");
    fetchData("usuarios");
    fetchData("pedidos");
  }, []);

  const handlerAddProducto = async (producto) => {
    const isUpdate = producto.id && producto.id > 0;
    const response = isUpdate ? await update(producto) : await create(producto);
    if (response?.data) {
      fetchData("productos");
      setProductoSelected({
        id: 0,
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        categoria: "",
        talla: "",
        rutaImagen: "",
      });
    } else {
      alert(
        isUpdate ? "Error al actualizar producto." : "Error al crear producto."
      );
    }
  };

  const handlerRemoveProducto = async (id) => {
    await remove(id);
    fetchData("productos");
  };

  const handlerProductoSelected = (producto) => {
    setProductoSelected({ ...producto });
    if (activeTab !== "productos") setActiveTab("productos"); // Cambia a la pestaña de productos si se selecciona uno para editar
  };

  const handlerRemoveUsuario = async (id) => {
    await borrarUsuarioPorId(id);
    fetchData("usuarios");
  };

  const handlerRemovePedido = async (id) => {
    try {
      await borrarPedidoPorId(id);
      fetchData("pedidos");
    } catch (error) {
      alert("Error al borrar el pedido.");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "productos":
        return (
          <div className="row g-lg-4">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h4 className="text-white mb-3 fw-light">
                {productoSelected.id ? "Editar Producto" : "Nuevo Producto"}
              </h4>
              <CreacionProductoForm
                handlerAdd={handlerAddProducto}
                productoSelected={productoSelected}
              />
            </div>
            <div className="col-lg-8">
              <h4 className="text-white mb-3 fw-light">Listado de Productos</h4>
              <ProductoGrid
                productos={productos}
                handlerRemove={handlerRemoveProducto}
                handlerUpdate={handlerProductoSelected}
              />
            </div>
          </div>
        );
      case "usuarios":
        return (
          <>
            <h4 className="text-white mb-3 fw-light">Gestión de Usuarios</h4>
            <UsuarioGrid
              usuarios={usuarios}
              handlerRemove={handlerRemoveUsuario}
            />
          </>
        );
      case "pedidos":
        return (
          <>
            <h4 className="text-white mb-3 fw-light">Listado de Pedidos</h4>
            <PedidoGrid pedidos={pedidos} handlerRemove={handlerRemovePedido} />
          </>
        );
      default:
        return <p className="text-white-50">Selecciona una pestaña.</p>;
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-white fw-light">
        Panel de Administración
      </h2>
      <ul className="nav nav-pills nav-fill mb-4 admin-tab-nav">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "productos" ? "active" : ""}`}
            onClick={() => setActiveTab("productos")}
          >
            <i className="bi bi-box-seam-fill me-2"></i>Productos
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "usuarios" ? "active" : ""}`}
            onClick={() => setActiveTab("usuarios")}
          >
            <i className="bi bi-people-fill me-2"></i>Usuarios
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "pedidos" ? "active" : ""}`}
            onClick={() => setActiveTab("pedidos")}
          >
            <i className="bi bi-receipt-cutoff me-2"></i>Pedidos
          </button>
        </li>
      </ul>
      <div className="tab-content p-3 p-md-4 rounded admin-tab-content-bg shadow-lg">
        {renderContent()}
      </div>
    </div>
  );
};
