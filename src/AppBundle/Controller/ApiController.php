<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends Controller
{
    public function userListAction()
    {
        $users = $this->getDoctrine()->getManager()->getRepository('AppBundle:User')->findAll();

        return new JsonResponse($this->usersToJson($users));
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function userCreateAction(Request $request)
    {
        $userData = $request->get('user');
        $user = new User();
        $user->setUsername($userData['username']);
        $user->setEmail($userData['email']);

        $em = $this->getDoctrine()->getManager();

        $em->persist($user);
        $em->flush();

        return new JsonResponse(array(
            'id' => $user->getId()
        ));
    }

    private function usersToJson(array $users)
    {
        return array_map(function($user){
            return array(
                'id' => $user->getId(),
                'username' => $user->getUsername(),
                'email' => $user->getEmail()
            );
        }, $users);
    }
}
