import { Button } from "bootstrap";
import React from "react";
import ( Button, Form, Spinner, Stack ) from "react-bootstrap";

const DeleteArticlePage = (
    {
    articles,
    loading
    }
) => {
    return (
        <Stack gap={2} className="align-items-ceter">
            <div>Delete</div>
            <Form>
                <Form.Group className="d-flex flex-row align-items-ceter mb-2">
                    <Form.Label className="me-2">ID</Form.Label>
                    <Form.Control placeholder="id"/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            {
                loading ?
                <articles.map((article) => (
                    <div className="align-self-start" key={article.id} style={{ textAlign: "left"}}>ID: {article.id}.</div>
                ))
            }
        </Stack>
        )
        }
        
export default DeleteArticlePage;