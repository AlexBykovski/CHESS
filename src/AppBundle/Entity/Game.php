<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="AppBundle\Entity\UserRepository")
 */
class Game
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="id_user_w", type="integer")
     */
    private $id_user_w;

    /**
     * @var string
     *
     * @ORM\Column(name="id_user_b", type="integer")
     */
    private $id_user_b;

    /**
     * @var string
     *
     * @ORM\Column(name="result", type="integer")
     */
    private $result;

    /**
     * @var string
     *
     * @ORM\Column(name="history", type="array")
     */
    private $history;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set id_user_w
     *
     * @param integer $idUserW
     * @return Game
     */
    public function setIdUserW($idUserW)
    {
        $this->id_user_w = $idUserW;

        return $this;
    }

    /**
     * Get id_user_w
     *
     * @return integer 
     */
    public function getIdUserW()
    {
        return $this->id_user_w;
    }

    /**
     * Set id_user_b
     *
     * @param integer $idUserB
     * @return Game
     */
    public function setIdUserB($idUserB)
    {
        $this->id_user_b = $idUserB;

        return $this;
    }

    /**
     * Get id_user_b
     *
     * @return integer 
     */
    public function getIdUserB()
    {
        return $this->id_user_b;
    }

    /**
     * Set result
     *
     * @param integer $result
     * @return Game
     */
    public function setResult($result)
    {
        $this->result = $result;

        return $this;
    }

    /**
     * Get result
     *
     * @return integer 
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Set history
     *
     * @param array $history
     * @return Game
     */
    public function setHistory($history)
    {
        $this->history = $history;

        return $this;
    }

    /**
     * Get history
     *
     * @return array 
     */
    public function getHistory()
    {
        return $this->history;
    }
}
