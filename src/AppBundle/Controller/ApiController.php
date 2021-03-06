<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use AppBundle\Entity\Game;
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
        $userData = $this->getRequestPayloadParam('user');
        $user = new User();
        $user->setFirstName($userData['firstName']);
        $user->setLastName($userData['lastName']);
        $user->setNickName($userData['nickName']);
        $user->setPassword($userData['password']);
        $user->setEmail($userData['email']);
        $user->setElo($userData['elo']);
        $em = $this->getDoctrine()->getManager();

        $em->persist($user);
        $em->flush();

        return new JsonResponse(array(
            'id' => $user->getId()
        ));
    }

    private function getRequestPayloadParam($param)
    {
        $params = array();
        $content = $this->get("request")->getContent();
        if (!empty($content))
        {
            $params = json_decode($content, true);
        }

        return array_key_exists($param, $params) ? $params[$param] : null;
    }

    private function usersToJson(array $users)
    {
        return array_map(function($user){
            return array(
                'id' => $user->getId(),
                'firstName' => $user->getFirstName(),
                'lastName' => $user->getLastName(),
                'nickName' => $user->getNickName(),
                'password' => $user->getPassword(),
                'email' => $user->getEmail(),
                'elo' => $user->getElo()
            );
        }, $users);
    }
}
