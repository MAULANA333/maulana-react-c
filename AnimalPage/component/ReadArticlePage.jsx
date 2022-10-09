import React from "react";
import { Button, Form, Spinner, Stack } from "react-bootstrap";

const ReadArticlePage = (
    {
        articles,
        formData,
        loading,
        handleSubmit,
        handleChangeFormData
    }
 ) => {
    const { authorid, id, rating, title } = formData;
    return (
        <stack gap={4}>
            Create
            <Form onSubmit={handleSubmit}>
                <Stack direction="horizontal" gap={2}>
                    <Form.Group>
                        <Form.Label>Author Id</Form.Label>
                        <Form.Conrol
                        value={authorid}
                        onChange={(ev :... ) => handleChangeFormData ("authorId", ev.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                        value={id}
                        onChange={(ev :... ) => handleChangeFormData ("id", ev.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Rating</Form.Label>
                        <Form.Control
                        value={rating}
                        onChange={(ev :... ) => handleChangeFormData ("rating", ev.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Label>Title</Form.Label>
                        <Form.Control
                        value={title}
                        onChange={(ev :... ) => handleChangeFormData ("title", ev.currentTarget.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Stack>
            </Form>
            {
                loading
                ?
                <Spinner animation="grow"/>
                :
                articles.aap((articlel) => (
                    <li key={article.id}>{article.title}</li>
                ))
            }
        </stack>
    );

};


export default ReadArticlelPage;