import { AiOutlineCloudUpload } from "react-icons/ai";

function AddRecipeForm({ formData, setFormData, handleSubmit }) {
  const handleChange = (event, index) => {
    const { name, value } = event.target;

    if (name.startsWith("ingredient")) {
      const ingredients = [...formData.ingredients];
      const ingredientIndex = Number(name.split("-")[1]);
      const field = name.split("-")[2];

      if (field === "itemName") {
        ingredients[ingredientIndex].itemName = value;
      } else if (field === "quantity") {
        ingredients[ingredientIndex].quantity = value;
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        ingredients,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleRemoveIngredient = (index) => {
    const ingredients = [...formData.ingredients];
    ingredients.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ingredients,
    }));
  };

  return (
    <>
      <form
        className="upload"
        onSubmit={handleSubmit}
        value={formData.title || ""}
        onChange={handleChange}
        required
      >
        <div className="upload__column">
          <label>Title</label>
          <input
            value={formData.title || ""}
            onChange={handleChange}
            required
            name="title"
            type="text"
            placeholder="Recipe Title*"
          />

          <div className="upload__column two-cols">
            <div className="upload__column ">
              <label>Prep time</label>
              <input
                value={formData.cookingTime || ""}
                onChange={handleChange}
                required
                name="cookingTime"
                type="number"
                placeholder="Prep time*"
              />
            </div>
            <div className="upload__column ">
              <label>Servings</label>
              <input
                value={formData.servings || ""}
                onChange={handleChange}
                required
                name="servings"
                type="number"
                placeholder="Servings*"
              />
            </div>
          </div>

          <div className="upload__column">
            <label htmlFor="imageInput">Upload Image</label>
            <input
              value={formData.image || ""}
              onChange={handleChange}
              required
              name="image"
              type="text"
              placeholder="Upload image*"
            />
          </div>

          {formData.ingredients.map((ingredient, index) => (
            <div className="upload__column asymmetrical" key={index}>
              <div className="upload__column ingredient">
                <label>{`Ingredient ${index + 1}`}</label>
              </div>

              <div className="upload__column first  ">
                <input
                  value={ingredient.itemName}
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  required
                  name={`ingredient-${index}-itemName`}
                  placeholder="Item Name"
                />
              </div>
              <div className="upload__column second ">
                <input
                  value={ingredient.quantity}
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  required
                  name={`ingredient-${index}-quantity`}
                  placeholder="Quantity"
                />
              </div>
              <div className="upload__column third ">
                <button
                  className="upload__column--btn remove"
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="add-more">
            <button
              className="upload__column--btn add "
              type="button"
              onClick={() => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  ingredients: [
                    ...prevFormData.ingredients,
                    { itemName: "", quantity: "" },
                  ],
                }));
              }}
            >
              Add More
            </button>
          </div>
        </div>

        <button className="btn upload__btn">
          <svg>
            <AiOutlineCloudUpload />
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </>
  );
}

export default AddRecipeForm;
