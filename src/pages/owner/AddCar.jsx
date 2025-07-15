import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const carSchema = Yup.object({
  brand: Yup.string().required("Brand is required"),
  model: Yup.string().required("Model is required"),
  year: Yup.number().required("Year is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  transmission: Yup.string().required("Transmission is required"),
  fuel: Yup.string().required("Fuel type is required"),
  capacity: Yup.number().required("Capacity is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string(),
  image: Yup.mixed().required("Image is required"),
});

export const AddCar = () => {
  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      year: "",
      price: "",
      category: "",
      transmission: "",
      fuel: "",
      capacity: "",
      location: "",
      description: "",
      image: null,
    },
    validationSchema: carSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Car listed successfully!");
    },
  });

  return (
    <Container>
      <h4 className="fw-bold mb-2">Add New Car</h4>
      <p className="text-muted">
        Fill in details to list a new car for booking, including pricing, availability, and specifications.
      </p>

      <Card className="p-4 shadow-sm">
        <form onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <label>Brand</label>
              <input
                name="brand"
                type="text"
                className="form-control"
                placeholder="e.g. BMW, Mercedes"
                {...formik.getFieldProps("brand")}
              />
              {formik.touched.brand && formik.errors.brand && (
                <div className="text-danger">{formik.errors.brand}</div>
              )}
            </Col>
            <Col md={6}>
              <label>Model</label>
              <input
                name="model"
                type="text"
                className="form-control"
                placeholder="e.g. X5, E-Class"
                {...formik.getFieldProps("model")}
              />
              {formik.touched.model && formik.errors.model && (
                <div className="text-danger">{formik.errors.model}</div>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <label>Year</label>
              <input
                name="year"
                type="number"
                className="form-control"
                {...formik.getFieldProps("year")}
              />
              {formik.touched.year && formik.errors.year && (
                <div className="text-danger">{formik.errors.year}</div>
              )}
            </Col>
            <Col md={4}>
              <label>Daily Price ($)</label>
              <input
                name="price"
                type="number"
                className="form-control"
                {...formik.getFieldProps("price")}
              />
              {formik.touched.price && formik.errors.price && (
                <div className="text-danger">{formik.errors.price}</div>
              )}
            </Col>
            <Col md={4}>
              <label>Category</label>
              <input
                name="category"
                type="text"
                className="form-control"
                {...formik.getFieldProps("category")}
              />
              {formik.touched.category && formik.errors.category && (
                <div className="text-danger">{formik.errors.category}</div>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <label>Transmission</label>
              <input
                name="transmission"
                type="text"
                className="form-control"
                {...formik.getFieldProps("transmission")}
              />
              {formik.touched.transmission && formik.errors.transmission && (
                <div className="text-danger">{formik.errors.transmission}</div>
              )}
            </Col>
            <Col md={4}>
              <label>Fuel Type</label>
              <input
                name="fuel"
                type="text"
                className="form-control"
                {...formik.getFieldProps("fuel")}
              />
              {formik.touched.fuel && formik.errors.fuel && (
                <div className="text-danger">{formik.errors.fuel}</div>
              )}
            </Col>
            <Col md={4}>
              <label>Seating Capacity</label>
              <input
                name="capacity"
                type="number"
                className="form-control"
                {...formik.getFieldProps("capacity")}
              />
              {formik.touched.capacity && formik.errors.capacity && (
                <div className="text-danger">{formik.errors.capacity}</div>
              )}
            </Col>
          </Row>

          <div className="mb-3">
            <label>Location</label>
            <input
              name="location"
              type="text"
              className="form-control"
              placeholder="e.g. San Francisco, CA"
              {...formik.getFieldProps("location")}
            />
            {formik.touched.location && formik.errors.location && (
              <div className="text-danger">{formik.errors.location}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              className="form-control"
              placeholder="Describe your car, condition, etc."
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-danger">{formik.errors.description}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Upload Car Image</label>
            <input
              name="image"
              type="file"
              className="form-control"
              onChange={(event) => {
                const file = event.currentTarget.files[0];
                formik.setFieldValue("image", file);
              }}
            />
            {formik.touched.image && formik.errors.image && (
              <div className="text-danger">{formik.errors.image}</div>
            )}
            {formik.values.image && (
              <img
                src={URL.createObjectURL(formik.values.image)}
                alt="Preview"
                height="100"
                className="mt-2 rounded"
              />
            )}
          </div>

          <Button type="submit" variant="primary">
            ✔️ List Your Car
          </Button>
        </form>
      </Card>
    </Container>
  );
};
