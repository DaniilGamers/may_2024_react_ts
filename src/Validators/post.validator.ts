import Joi from "joi";

export const postValidator = Joi.object({
    body: Joi.string().min(20).max(200).required().messages({
        "string.required": "This field is required",
        "string.max": "You already write too much words on the single post",
        "string.min": "Write at least a bit bigger"
    }),
    title: Joi.string().max(50).required().messages({
        "string.required": "This field is required",
        "string.max": "You typed enough words my friend"
    }),
    userId: Joi.number().max(10).required().messages({
        "number.required": "This field is required",
        "number.max": "Maximum is 10"
    })
})