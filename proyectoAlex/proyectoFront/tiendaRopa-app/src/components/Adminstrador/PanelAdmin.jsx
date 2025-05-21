import { use, useEffect, useState } from "react";
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

// metodos de producto
export const PanelAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [productoSelected, setProductoSelected] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  const getProductos = async () => {
    try {
      // LLamo a la funcion del servicio que es una peticion GET que me deberia mostrar todos los productos
      const result = await findAll();
      // console.log("prods", result.data);
      if (result && result.data) {
        //si se obtiene el resultado invoco el setProductos con los resultados que obtuve de la peticion
        setProductos(result.data);
      } else {
        //en caso contrario devuelve por consola un error
        console.error("Error la estructura de la API no es la correcta");
        setProductos([]);
      }
    } catch (error) {
      console.error("Error al obtener los productos", error);
      setProductos([]);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);
  //   agregar o modificar producto
  const handlerAddProducto = async (producto) => {
    //si es un producto existente en lugar de crear un producto lo que voy a hacer es modificarlo
    // console.log("Producto antes de enviar: ", producto);
    // console.log(producto.id);
    if (producto.id > 0) {
      const response = await update(producto);
      setProductos(
        productos.map((prod) => {
          // en caso de que el nuevo producto coincidiese con el id de uno de los
          // productos de la lista lo remplazo
          if (prod.id === response.data.id) {
            return { ...response.data };
          }
          return prod;
        })
      );
    } else {
      const response = await create(producto);
      setProductos([...productos, { ...response.data }]);
    }
  };
  //   borrar producto
  const handlerRemoveProducto = (id) => {
    remove(id);
    setProductos(productos.filter((producto) => producto.id != id));
  };
  //
  const handlerProductoSelected = (producto) => {
    /* console.log("Prod seleccionado", producto);
        console.log("id ", producto.id); */
    setProductoSelected({ ...producto });
  };
  // Gestion de usuarios
  const getUsuarios = async () => {
    try {
      const result = await listadoInfoCuentas();
      // console.log("usuarios", result.data);
      if (result && result.data) {
        setUsuarios(result.data);
      } else {
        console.error("Error la estructura de la API no es la correcta");
        setUsuarios([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsuarios();
  }, []);
  const handlerRemoveUsuario = (id) => {
    borrarUsuarioPorId(id);
    setUsuarios(usuarios.filter((usuario) => usuario.id != id));
  };
  // gestion Pedidos
  const getPedidos = async () => {
    try {
      const result = await listadoPedidos();
      console.log("pedidos", result.data);
      if (result && result.data) {
        setPedidos(result.data);
      } else {
        console.error("Error la estructura de la API no es la correcta");
        setPedidos([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPedidos();
  }, []);
  const handlerRemovePedido = (id) => {
    borrarPedidoPorId(id);
    setPedidos(pedidos.filter((pedido) => pedido.id != id));
  };
  return (
    <>
      <div id="principal" className="container my-4">
        <h3 className="d-flex justify-content-center">Gestion de Productos</h3>
        <div className="row">
          <div className="col">
            <CreacionProductoForm
              handlerAdd={handlerAddProducto}
              productoSelected={productoSelected}
            />
          </div>
          <div className="row my-4">
            <div className="col">
              <h3 className="d-flex justify-content-center">
                Listado de productos
              </h3>
              <ProductoGrid
                productos={productos}
                handlerRemove={handlerRemoveProducto}
                handlerUpdate={handlerProductoSelected}
              ></ProductoGrid>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h3 className="d-flex justify-content-center">Gestion de Usuarios</h3>
          <div className="row my-4">
            <UsuarioGrid
              usuarios={usuarios}
              handlerRemove={handlerRemoveUsuario}
            ></UsuarioGrid>
          </div>
        </div>
        <div className="my-4">
          <h3 className="d-flex justify-content-center">Listado de Pedidos</h3>
          <div className="row my-4">
            <PedidoGrid
              pedidos={pedidos}
              handlerRemove={handlerRemovePedido}
            ></PedidoGrid>
          </div>
        </div>
      </div>
    </>
  );
};
