import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryForm from "./Catatan";
import { addItem, deleteItem } from "./Action";
import DiaryItem from "./CatatanItem";
import { Modal } from "react-bootstrap";
import "./Main.css";

// const Main = () => {
//   return (
//     <div>
//       <h1>Catatan Harian</h1>
//     </div>
//   );
// };
// export default Main;
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      activeItem: null,
    };
  }
  render() {
    const { addItem, diaryItems, deleteItem } = this.props;
    const { show, activeItem } = this.state;
    return (
      <div className="container-catatan">
        <div className="grid-container">
          <div className="diary-app1">
            <h1>Catatan Harian</h1>
            <DiaryForm addItem={(item) => addItem(item)} />
          </div>
          <div className="diary-app2" style={{ paddingTop: 20 }}>
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => {
                return (
                  <DiaryItem
                    deleteItem={(id) => deleteItem(id)}
                    showModal={(item) =>
                      this.setState({ show: true, activeItem: item })
                    }
                    key={item.id}
                    item={item}
                  />
                );
              })
            ) : (
              <h1>Catatan Kosong</h1>
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="example-modal-sizes-title-lg"
              style={{ wordBreak: "break-word" }}
            >
              {activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ wordBreak: "break-word" }}>
            {activeItem?.text}{" "}
          </Modal.Body>
          <Modal.Footer>{activeItem?.date}</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
