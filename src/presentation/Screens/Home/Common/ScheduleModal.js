import {
  Modal,
  Form,
  Button,
  Input,
  TimePicker,
  DatePicker,
  Col,
  Row,
} from "antd";
import moment from "moment";
import { useState } from "react";
import { useHomeStore } from "../../../Stores/Home";

const ProgressCard = () => {
  const [form] = Form.useForm();
  const [{ visible }, { setVisible, onfinish }] = useHomeStore();
  const [date, setdate] = useState(null);
  const [time, settime] = useState(null);
  const onChangeTime = (time, timeString) => {
    settime(timeString);
  };

  const onChangeDate = (date, dateString) => {
    setdate(dateString);
  };
  return (
    <Modal
      title="Schedule"
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={[
        <div
          key="1"
          style={{ display: "flex" }}
          className="project-modal-footer"
        >
          <Button
            size="default"
            type="primary"
            key="submit"
            htmlType="submit"
            form="createMeet"
          >
            Create
          </Button>
          <Button
            size="default"
            type="white"
            key="back"
            outlined
            onClick={() => setVisible(false)}
          >
            Cancel
          </Button>
        </div>,
      ]}
    >
      <Form
        form={form}
        id="createMeet"
        name="createMeet"
        className="inventoryAddFormWrapper"
        onFinish={(values) => onfinish(values, date, time)}
      >
        <Form.Item
          name="topic"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="Password"
          rules={[{ required: true, message: "Please input password!" }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Row>
          <Col>
            <DatePicker style={{ width: "50%" }} onChange={onChangeDate} />
          </Col>
          <Col>
            <TimePicker
              style={{ width: "50%" }}
              onChange={onChangeTime}
              defaultOpenValue={moment("00:00", "HH:mm:ss")}
              format={"HH:mm"}
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ProgressCard;
